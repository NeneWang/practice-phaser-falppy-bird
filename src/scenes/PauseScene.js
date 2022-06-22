
import BaseScene from "./BaseScene";

class PauseScene extends BaseScene {
    constructor(config) {
        super('PauseScene', config);

        this.menu = [
            { scene: 'PlayScene', text: 'Continue' },
            { scene: 'MenuScene', text: 'Exit' },
        ]


    }

    create() {
        super.create()
        this.createMenu(this.menu, this.setupMenuEvets.bind(this));
    }

    setupMenuEvets(menuItem) {
        const textGO = menuItem.textGO;
        textGO.setInteractive();

        textGO.on('pointerover', () => {
            textGO.setStyle({ fill: '#ff0' })
        })

        textGO.on('pointerout', () => {
            textGO.setStyle({ fill: '#fff' })
        })

        textGO.on('pointerup', () => {
            console.log("Clicking on Some Option!")

        })
    }


}

export default PauseScene;
