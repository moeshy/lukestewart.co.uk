import React from 'react';
import styled from 'styled-components';
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel
} from 'react95';


const Wrapper = styled.div`
 padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
21  .window-header {
22    display: flex;
23    align-items: center;
24    justify-content: space-between;
25  }
26  .close-icon {
27    display: inline-block;
28    width: 16px;
29    height: 16px;
30    margin-left: -1px;
31    margin-top: -1px;
32    transform: rotateZ(45deg);
33    position: relative;
34    &:before,
35    &:after {
36      content: '';
37      position: absolute;
38      background: ${({ theme }) => theme.materialText};
39    }
40    &:before {
41      height: 100%;
42      width: 3px;
43      left: 50%;
44      transform: translateX(-50%);
45    }
46    &:after {
47      height: 3px;
48      width: 100%;
49      left: 0px;
50      top: 50%;
51      transform: translateY(-50%);
52    }
53  }
54  .window {
55    width: 400px;
56    min-height: 200px;
57  }
58  .window:nth-child(2) {
59    margin: 2rem;
60  }
61  .footer {
62    display: block;
63    margin: 0.25rem;
64    height: 31px;
65    line-height: 31px;
66    padding-left: 0.25rem;
67  }
68`;

export function Default() {
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
              Error! Invalid user detected, admin privileges required, redirecting to %guest% profile, please wait
            </p>
          </WindowContent>
          <Panel variant='well' className='footer'>
            Redirecting user.
          </Panel>
        </Window>
  
      </>
 );
}

Default.story = {
  name: 'default'
};