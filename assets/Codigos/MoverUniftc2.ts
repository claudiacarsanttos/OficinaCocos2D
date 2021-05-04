// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property
    velocidade: number = 50;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.setPosition(this.node.position.x , this.node.position.y + (dt * this.velocidade));
    }
}