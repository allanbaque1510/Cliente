import React, { useEffect } from 'react';

const PayphoneButton = ({monto}) => {
  useEffect(() => {
    // Token obtenido desde la consola de desarrollador
    const token = "pH98PMpqMhEXHfLWtULACH_TW3rddATsQCvOf3HFJduZgZGDoou4-37j-VjEwpBVcwgF-Y1ZAIeRf3jUxTPK9jhA72im804KGZc7x51eVAutfQ7xH0F3YHtTc94zeWDt9rS866jrReu0hwHKMFSp26q6jKdEIvznhEyo-vuSSo4fdk3pBM8sL9C2136Zx02rUMTYdG-QSNSRksY2qhF8xCrwO8pRBjc3SIJGtMeNtwPmloICBPnT0VCsaoveTJ7TDLxlx8-ljhnOccRJ99r5EUI_fMRkpg9YS8Wc_4bgzsOlqg1YQELDtqnmfWv1vJMiT0lUzIPFg3K4iRIhjevPGzq7pH8";
    console.log(monto)
    // Parámetros de configuración
    const config = {
      btnHorizontal: true,
      btnCard: true,
    };

    // Crear el botón de Payphone
    const payphoneButton = payphone.Button({
      token: token,
      ...config,
      createOrder: function (actions) {
        // Se ingresan los datos de la transacción, ej. monto, impuestos, etc.
        return actions
          .prepare({
            amount: monto,
            amountWithoutTax: monto,
            currency: "USD",
            clientTransactionId: "1234",
            lang: "es",
          })
          .then(function (paramlog) {
            console.log(paramlog);
            return paramlog;
          })
          .catch(function (paramlog2) {
            console.log(paramlog2);
            return paramlog2;
          });
      },
      onComplete: function (model, actions) {
        console.log("Modelo:");
        console.log(model);
      },
    });

    // Renderizar el botón en el elemento con ID "pp-button"
    
    // Limpieza al desmontar el componente
    return () => {
        payphoneButton.render("#pp-button");
        // Eliminar el botón de Payphone si es necesario
    };
  }, []);

  return <div id="pp-button"></div>;
};

export default PayphoneButton;
