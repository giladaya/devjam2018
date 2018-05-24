import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div style="text-align:center">
            <h1>
                Welcome to {{title}}!
            </h1>
            <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
        </div>
       
    `,
    styles: []
})
export class AppComponent {
    title = 'new version 14';


    // Inject SwUpdate
    constructor(private swUpdate: SwUpdate) {
        // Subscribe new worker is available
        this.swUpdate.available.subscribe(event => {
            alert('A newer version is now available. Refresh the page now to update the cache');
            // we may force an update by :
            //this.swUpdate.activateUpdate().then(() => document.location.reload());

        });
        this.swUpdate.checkForUpdate()

    }
}