import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon/icon.component';
import { NotificationComponent } from './components/notification/notification.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconComponent, CommonModule, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe Game';
  winMessage: string = '';
  notificationMessage: string = '';
  notificationType: 'success' | 'info' = 'info';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');

  constructor() {}

  // will fire when click on any card
  handleClick(itemNumber: number): void {
    // will check if the game is ended or not
    if (this.winMessage) {
      // game ended
      this.showNotification(this.winMessage, 'success');
      return;
    }

    // checking the clicked item is empty then
    // setting the active player sign on it
    // otherwise showing alert to the user
    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';

      // changing player turn
      this.isCross = !this.isCross;
    } else {
      this.showNotification('Already filled', 'info');
      return;
    }

    // checking winner by looking itemArray
    this.checkIsWinner();
  }

  // will check for winner
  checkIsWinner = () => {
    //  checking winner of the game
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
      this.showNotification(this.winMessage, 'success');
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
      this.showNotification(this.winMessage, 'success');
    } else {
      // Check for draw condition
      if (this.itemArray.every(cell => cell !== 'empty')) {
        // Declare the game as a draw
        this.winMessage = 'It\'s a draw!';
        this.showNotification(this.winMessage, 'info');
      }
    }
  };

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  };

  showNotification(message: string, type: 'success' | 'info') {
    this.notificationMessage = message;
    this.notificationType = type;
    setTimeout(() => this.notificationMessage = '', 3000);
  }
}
