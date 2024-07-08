const AlerteGenerale = () => {
    alert('Alerte !!!');
  }

export function MyButton({ color }) {
    return (
      <>
        <h1>
          <u>Bouton :</u>
        </h1>
        <button style={{ color: color }}>Je suis un bouton</button>
      </>
    );
  }

  export function MyButton2() {
    return (
      <>
        <h1>
          <u>Bouton :</u>
        </h1>
        <button onClick={AlerteGenerale}>Je suis un bouton</button>
      </>
    );
  }

