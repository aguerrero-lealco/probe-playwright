import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
       this.page = page;
    }   
    get elements() {
        return {
            textboxes: {
                username: this.page.locator('#leal-input-login-name'),
                password: this.page.locator('#leal-input-login-pass')
            },
            buttons: {
                initSesion: this.page.locator("#leal-input-login-button"),
                recoverSesion: this.page.locator('text="Recuperar contraseña"')
            },
        }
    }
    async insertUsername(username) {
        await this.elements.textboxes.username.fill(username)
    }
    async insertPassword(password) {
        await this.elements.textboxes.password.fill(password)
    }
    async clickOnButton() {
        
        await this.elements.buttons.initSesion.click()
    }

        
}

