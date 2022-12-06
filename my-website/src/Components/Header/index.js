import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
  Progress
} from 'react95';

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
`;



export function Default() {
  const [showWindow, setShowWindow] = useState(true);
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowWindow(false);
      setShowProgress(true);
    }, 5000);

    const interval = setInterval(() => {
      setProgress(progress => Math.min(progress + 10, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowProgress(false);
      }, 1000);
    }
  }, [progress]);

  if (!showWindow && !showProgress) {
    return null;
  }

  if (showWindow) {
    return (
      <>
        <Window resizable className='window'>
          <WindowHeader className='window-header'>
            <span>lukesPortfolio.exe</span>
          </WindowHeader>
          <Toolbar>
            <Button variant='menu' size='sm'>
              Help
            </Button>
          </Toolbar>
          <WindowContent>
            <p>
              Error
              ! Invalid user detected, admin privileges required, redirecting to %guest% profile, please wait
            </p>
          </WindowContent>
          <Panel variant='well' className='footer'>
            Redirecting user.
          </Panel>
        </Window>
      </>
    );
  }

  if (showProgress) {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Progress value={progress} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '500px', margin: '0 auto' }} />
        </div>
      </>
    );
  }
}

Default.story = {
  name: 'default'
};
