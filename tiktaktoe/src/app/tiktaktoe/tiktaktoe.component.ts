import {Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-tiktaktoe',
  standalone: true,
  imports: [],
  templateUrl: './tiktaktoe.component.html',
  styleUrls: ['./tiktaktoe.component.css']
})
export class TiktaktoeComponent implements AfterViewInit {

  XPlayer: string = "X";
  OPlayer: string = "O";
  symbolsSetCounter = 0;
  won = false;
  game: HTMLDivElement | null = null;

  ngAfterViewInit(): void {
    const game = document.querySelector(".game") as HTMLDivElement;
    this.game = game;

    console.log("game", this.game);

    if (this.game == null) {
      alert("game was null");
      return;
    }

    //generate cells

    for (let i = 0; i < 9; i++) {
      const cell: HTMLDivElement = document.createElement("div");
      cell.addEventListener("click", () => this.handelCellClick(i));
      cell.classList.add("cell");
      game.appendChild(cell);
      alert("here");
    }
  }

  handelCellClick(i: number): void {
    // Handle cell click logic here
  }

  onRestartClick(): void {
    for (let i = 0; i < 9; i++) {
      this.game!.children[i].innerText = "";
    }

    this.symbolsSetCounter = 0;
    this.won = false;
  }
}
