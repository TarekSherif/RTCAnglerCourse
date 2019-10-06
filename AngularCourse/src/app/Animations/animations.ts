import { trigger, state, style, transition, animate } from '@angular/animations'

export let fade=trigger('fade',[
  transition(':enter , :leave',[
     animate(1000,style({opacity:0}))
    ])
]);



export let openClose=trigger('openClose', [
  // ...
  state('open', style({
    height: '200px',
    opacity: 1,
    backgroundColor: 'yellow'
  })),
  state('closed', style({
    height: '100px',
    opacity: 0.5,
    backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('1s')
  ]),
  transition('closed => open', [
    animate('0.5s')
  ]),
]);


export let marquee=trigger('marquee',[
  state('left',style({
     transform : 'translateX(0px)',
     "background-color": "#FF6868"
  })),
  state('right',style({
     transform : 'translateX(1000px)',
     "background-color": "#FFF"
  })),
  transition('left <=> right',animate('3500ms ease-in'))
])
