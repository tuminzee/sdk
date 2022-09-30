import { SignRequest, TonConnect, TransactionRequest } from 'src/ton-connect';
import { Button } from 'src/widget/views';

export class WidgetController {
    public readonly button = new Button(this);

    constructor(public readonly connector: TonConnect) {}

    /**
     * Opens the modal window and handles a wallet connection
     */
    public connectWallet(): void {}

    /**
     * Opens the modal window and handles an account switching
     */
    public switchAccount(): void {}

    /**
     * Opens the modal window and handles the tx sending
     * @param tx
     */
    public async sendTransaction(tx: TransactionRequest): Promise<boolean> {
        // const widget = new Widget();
        // open modal widget

        return this.connector.sendTransaction(tx);
    }

    /**
     * Opens the modal window and handles the message signing
     * @param signRequest
     */
    public async sign(signRequest: SignRequest): Promise<string> {
        // const widget = new Widget();
        // open modal widget

        return this.connector.sign(signRequest);
    }
}
