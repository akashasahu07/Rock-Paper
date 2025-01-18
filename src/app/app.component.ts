import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rock-Paper';

  computer: string = ''
  result: string = ''
  user_score:number = 0
  comp_score:number = 0

  MyFun(user: any) {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.computer = choices[randomIndex]

    if (user === this.computer) {
      this.result = "It's a tie!";
    }

    if (
      (user === "rock" && this.computer === "scissors") ||
      (user === "paper" && this.computer === "rock") ||
      (user === "scissors" && this.computer === "paper")
    ) {
      this.result = "You win!";
      this.user_score += 1
    } else {
      this.result = "Computer wins!";
      this.comp_score += 1
    }

    this.Winner()
  }

  Reset() {
    window.location.reload()
  }

  Winner() {
    if (this.user_score >= 10) {
      alert("You win the game! Computer loses!");
      this.Reset();
    } else if (this.comp_score >= 10) {
      alert("Computer wins the game! You lose!");
      this.Reset();
    }
  }
}
