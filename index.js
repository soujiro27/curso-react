import React from 'react';
import { render } from 'react-dom'
import Playlist from './src/playlist/components/playlist'
import data from './src/api.json'

const main = document.getElementById('main');

render(<Playlist data={data} />, main);