import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { timer } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  ticks = 0;
    
  minutesDisplay: number = 0;
  hoursDisplay: number = 0;
  secondsDisplay: number = 0;
  timer = timer(1, 1000);
  sub: Subscription;

  countDown;
   count = 6;
   count1 = 0;
   

  constructor() { 
    this.startTimer();
  }

  ngOnInit() {
    this.countDown = timer(0,1000).pipe(
      take(this.count),
      map(()=> --this.count)
   );
  }

  cliekc(){
    this.countDown = timer(0,1000).pipe(
      take(this.count),
      map(()=> this.count=0)
   );
  }
  private startTimer() {

        // let timer = Observable.timer(1, 1000);
        let timer = this.timer;
        
        this.sub = timer.subscribe(
            t => {
                this.ticks = t;
                
                this.secondsDisplay = this.getSeconds(this.ticks);
                this.minutesDisplay = this.getMinutes(this.ticks);
                this.hoursDisplay = this.getHours(this.ticks);
            }
        );
    }

    private getSeconds(ticks: number) {
        return this.pad(ticks % 60);
    }

    private getMinutes(ticks: number) {
         return this.pad((Math.floor(ticks / 60)) % 60);
    }

    private getHours(ticks: number) {
        return this.pad(Math.floor((ticks / 60) / 60));
    }

    private pad(digit: any) { 
        return digit <= 9 ? '0' + digit : digit;
    }
}
