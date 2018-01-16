import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    t: any;
    constructor() {}

    ngOnInit() {
        this.idleTimer();
    }

     idleTimer() {
        // window.onload = resetTimer;
        window.onmousemove = resetTimer; // catches mouse movements
        window.onmousedown = resetTimer; // catches mouse movements
        window.onclick = resetTimer;     // catches mouse clicks
        window.onscroll = resetTimer;    // catches scrolling
        window.onkeypress = resetTimer;

        function logout() {
            localStorage.setItem('isLoggedIn', 'false');
            window.location.href = '/login';
        }

       function reload() {
              window.location.href = self.location.href;
       }

       function resetTimer() {
            clearTimeout(this.t);
            this.t = setTimeout(logout, 30000);  // time is in milliseconds (1000 is 1 second)
            this.t = setTimeout(reload, 5000);  // time is in milliseconds (1000 is 1 second)
        }
    }
}
