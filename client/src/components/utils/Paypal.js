import React from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout'

function Paypal(props) {
    const onSuccess = (payment) => {
        //console.log(JSON.stringify(payment));
        props.onSuccess(payment);

        // {
        //     "paid":true,
        //     "cancelled":false,
        //     "payerID":"RUU9HMZ9PDY8G",
        //     "paymentID":"PAYID-L6M3FEI16G33007P11040516",
        //     "paymentToken":"EC-610131410G3959452",
        //     "returnUrl":"https://www.paypal.com/checkoutnow/error?paymentId=PAYID-L6M3FEI16G33007P11040516&token=EC-610131410G3959452&PayerID=RUU9HMZ9PDY8G",
        //     "address":{
        //         "recipient_name":"John Doe",
        //         "line1":"\\u05D9\\u05E9\\u05E8\\u05D0\\u05DC\\u05D9\\u05E1 5 \\u05D3\\u05D9\\u05E8\\u05D4 4",
        //         "city":"\\u05EA\\u05DC-\\u05D0\\u05D1\\u05D9\\u05D1",
        //         "state":"IL_zip = 61014",
        //         "postal_code":"61014",
        //         "country_code":"IL"
        //     },
        //     "email":"sb-zo6wk3490202@buyer.example.com"
        // }

    }

    const onCancel = (data) => {
        props.onCancel(data);

        // {
        //     "paymentToken":"EC-3KD40170P1153651D",
        //     "paymentID":"PAYID-L6M3H4Y01F06924HX512841H",
        //     "intent":"sale",
        //     "billingID":"EC-3KD40170P1153651D",
        //     "cancelUrl":"https://www.paypal.com/checkoutnow/error?token=EC-3KD40170P1153651D",
        //     "button_version":"2.1.102"
        // }
    }

    const onError = (err) => {
        props.onError(err);
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = props.toPay;

    const client = {
        sandbox:    'AQSpGxwdfZvqub5sIte3G28XquHAjyHZbX8eJtosqmLvJoX6akItg-q0UdTcAkkA7M13ig0WrFceMD-O',
        production: '',
    }

    return (
        <div>
            <PaypalExpressBtn
                env={env} 
                client={client}
                currency={currency} 
                total={total} 
                onError={onError} 
                onSuccess={onSuccess} 
                onCancel={onCancel}
                style={{
                    size: 'large',
                    color: 'blue',
                    shape: 'pill',
                    label: 'checkout'
                }}
            />
        </div>
    )
}

export default Paypal
