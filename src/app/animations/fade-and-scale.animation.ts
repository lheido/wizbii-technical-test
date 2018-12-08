import { animate, animation, style } from '@angular/animations';

export const fadeAndScaleAnimation = animation([
  style({
    opacity: 0,
    transform: 'scale(0.8)'
  }),
  animate('{{ timings }}', style({
    opacity: 1,
    transform: 'scale(1)'
  })),
]);
