import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationService {
    constructor(private alertController: AlertController) {}

    async getModalDelete(callback: Function){
        const alert = await this.alertController.create({
            header: 'Confirmation',
            message: 'Confirmer la suppression ?',
            buttons:[
                { 
                    text: 'Annuler', 
                    role: 'false',
                    cssClass: "alert-cancel",
                    handler: async () => {
                        await alert.dismiss()
                    },
                },
                {
                    text: 'Confirmer',
                    role: 'true',
                    cssClass: "alert-confirm",
                    handler: () => {
                        callback();
                    }
                }
            ],
        });

        await alert.present();   
    }
}
