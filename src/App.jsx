/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { addMessage, removeMessage } from './redax/chat/chatAction';

export const App = () => {
  const messagess = useSelector(state => state.messag.messages);

  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const deleteMessage = (message) => {
    dispatch(removeMessage(message));
  };

  const makeNewMessag = (event) => {
    event.preventDefault();

    if (value) {
      dispatch(addMessage({
        title: value,
        id: 234234,
        currentTime: `${new Date().toLocaleTimeString()}`,
      }));

      setValue('');
    }
  };

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <div className="chat">
      <div className="chat--messages">
        {messagess.map(message => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            className="chat--message"
            key={message.id}
            onClick={() => deleteMessage(message)}
          >
            {message.title}
            <span className="chat--time">
              {message.currentTime}
            </span>
          </div>
        ))}
      </div>

      <div className="chat--newMessage">
        <form
          action=""
          className="chat--form"
          onSubmit={makeNewMessag}
          value={value}
        >
          <Input
            className="chat--input"
            value={value}
            onChange={onChange}
          />
          <Button
            className="chat--button"
          />
        </form>
      </div>
    </div>
  );
};
