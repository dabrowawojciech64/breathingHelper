import { BreathOption } from './breath-option.type';

const breathOptions: BreathOption[] = [
  {
    name: 'Box breathing: 4-4-4-4',
    value: {
      inhaleTime: 4,
      inhaleHoldTime: 4,
      exhaleTime: 4,
      exhaleHoldTime: 4,
    },
  },
  {
    name: 'Calming breathing: 4-7-8',
    value: { inhaleTime: 4, inhaleHoldTime: 7, exhaleTime: 8 },
  },
  {
    name: 'Calming breathing(easy): 2-3.5-4',
    value: { inhaleTime: 2, inhaleHoldTime: 3.5, exhaleTime: 4 },
  },
  {
    name: 'MEME: Excited dog <EPILEPSY WARNING>',
    value: {
      inhaleTime: 0.05,
      inhaleHoldTime: 0.01,
      exhaleTime: 0.05,
      exhaleHoldTime: 0.01,
    },
  },
];

export { breathOptions };
