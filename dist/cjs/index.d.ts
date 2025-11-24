export interface PaymentRequest {
    appId?: string;
    orderId: string;
    amount: number;
    currency?: string;
    callbackUrl?: string;
    items: Item[];
}
export interface Item {
    name: string;
    amount: number;
    quantity: number;
}
export interface PaymentResponse {
    orderId: string;
    amount: number;
    currency?: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
    qr: string;
    url: string;
}
export interface CallbackIncomingData {
    appId: string;
    orderId: string;
    amount: number;
    currency: string;
    method?: string;
    vendor?: string;
    callbackUrl?: string;
    items: {
        name: string;
        amount: number;
        quantity: number;
    }[];
    merchantId: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
    createdAt: string;
}
export interface HandShakeRequest {
    handshakeSignature: string;
}
export interface HandShakeResponse {
    handshakeSignature: string;
}
/**
 * @SDKOptions
 * @SDKOptions
 * @SDKOptions
 */
export interface SDKOptions {
    appId: string;
    publishableKey: string;
    secretKey: string;
    apiBaseUrl: string;
}
/**
 * MMPaySDK
 * @param {string} appId
 * @param {string} publishableKey
 * @param {string} secretKey
 * @returns {MMPayNodeSdkClass}
 */
export declare function MMPaySDK(options: SDKOptions): MMPaySdkClass;
/**
 * @MMPaySdkClass
 */
declare class MMPaySdkClass {
    #private;
    /**
     * Initializes the SDK with the merchant's keys and the API endpoint.
     * @param {string} appId
     * @param {string} publishableKey
     * @param {string} secretKey
     */
    constructor(options: SDKOptions);
    /**
     * Generates an HMAC SHA256 signature for the request integrity check.
     * @private
     * @param {string} bodyString
     * @param {string} nonce
     * @returns {string}
     */
    _generateSignature(bodyString: string, nonce: string): string;
    /**
     * @Sandbox_Environment
     * @Sandbox_Environment
     * @Sandbox_Environment
     */
    /**
     * sandboxHandShake
     * @param {HandShakeRequest} payload
     * @returns {Promise<HandShakeResponse>}
     */
    sandboxHandShake(payload: HandShakeRequest): Promise<HandShakeResponse>;
    /**
     * sandboxPay
     * @param {PaymentRequest} payload
     * @param {string} payload.orderId
     * @param {number} payload.amount
     * @param {string} payload.callbackUrl
     * @param {Item[]} payload.items
     * @returns {Promise<PaymentResponse>}
     */
    sandboxPay(payload: PaymentRequest): Promise<PaymentResponse>;
    /**
     * @Production_Environment
     * @Production_Environment
     * @Production_Environment
     */
    /**
     * handShake
     * @param {HandShakeRequest} payload
     * @returns {Promise<HandShakeResponse>}
     */
    handShake(payload: HandShakeRequest): Promise<HandShakeResponse>;
    /**
     * pay
     * @param {PaymentRequest} payload - The data for the payment.
     * @param {string} payload.orderId
     * @param {number} payload.amount
     * @param {Item[]} payload.items
     * @returns {Promise<PaymentResponse>}
     */
    pay(payload: PaymentRequest): Promise<PaymentResponse>;
    /**
     * verifyCb
     * @param {string} payload
     * @param {string} nonce
     * @param {string} expectedSignature
     * @returns {Promise<boolean>}
     */
    verifyCb(payload: string, nonce: string, expectedSignature: string): Promise<boolean>;
}
export {};
