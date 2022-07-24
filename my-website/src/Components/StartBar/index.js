import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider
} from 'react95';
import logoIMG from '../../../node_modules/react95/dist/images/logo.png'

export default {
  title: 'AppBar',
  component: AppBar,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};
const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export function StartBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar style={{position: 'relative', bottom: 0}}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            <img
              src={logoIMG}
              alt='react95 logo'
              style={{ height: '20px', marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                bottom: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role='img' aria-label='👨‍💻'>
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem>
                <span role='img' aria-label='📁'>
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  );
}

StartBar.story = {
  name: 'StartBar'
};