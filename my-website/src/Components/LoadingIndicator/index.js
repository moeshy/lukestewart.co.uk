import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Progress } from 'react95';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.material};
  padding: 5rem;
`;

export default {
  title: 'Progress',
  component: Progress,
  decorators: [story => <Wrapper>{story()}</Wrapper>]
};

export function LoadingBlockBar() {
  const [percent, setPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          setShowProgress(false);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!showProgress) {
    return null;
  }

  return <Progress value={Math.floor(percent)} />;
}

LoadingBlockBar.story = {
  name: 'default'
};

export function Tile() {
  const [percent, setPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          setShowProgress(false);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!showProgress) {
    return null;
  }

  return <Progress variant='tile' value={Math.floor(percent)} />;
}

Tile.story = {
  name: 'tile'
};

export function HideValue() {
  const [percent, setPercent] = useState(0);
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(previousPercent => {
        if (previousPercent === 100) {
          setShowProgress(false);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(previousPercent + diff, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (!showProgress) {
    return null;
  }

  return <Progress hideValue value={Math.floor(percent)} />;
}

HideValue.story = {
  name: 'hide value'
};
