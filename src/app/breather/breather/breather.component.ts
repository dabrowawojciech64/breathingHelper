import { state, trigger, animate, style, transition, group, query, animateChild } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breather',
  templateUrl: './breather.component.html',
  styleUrls: ['./breather.component.scss'],
  animations: [
    trigger('outerCircleAnimation', [
      state('empty',
        style({
          transform: 'scale(20%)'
        })
      ),
      state('full',
        style({
          transform: 'scale(100%)'
        }),
      ),

      transition('void => *', [
        query('.inner-circle',style({transform: 'scale(50%)'}),{optional:true})
      ]),

      transition('empty => full', [
        group([
          animate('{{inhaleTime}}ms {{exhaleHoldTime}}ms ease-in-out'),
          query('.inner-circle',
            animate('{{inhaleTime}}ms {{exhaleHoldTime}}ms ease-in-out', style({ transform: 'scale(100%)' })),
            {optional: true}
          )
      ])
      ]),

      transition('full => empty', [
        group([
          animate('{{exhaleTime}}ms {{inhaleHoldTime}}ms ease-in-out'),
          query('.inner-circle',
            animate('{{exhaleTime}}ms {{inhaleHoldTime}}ms ease-in-out', style({ transform: 'scale(50%)' })),
          {optional:true})
        ])
      ])
    ])
  ]
})
export class BreatherComponent implements OnInit {

  public isInhaling: boolean = false;
  public inhaleTime: number = 4000;
  public inhaleHoldTime: number = 4000;
  public exhaleTime: number = 4000;
  public exhaleHoldTime: number = 4000;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleState(event: any): void {
    this.isInhaling = !this.isInhaling;
  }
}
