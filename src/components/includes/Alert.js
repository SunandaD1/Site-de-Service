import Alert from 'react-bootstrap/Alert';

function BasicExample() {
  return (
    <>
      {[
        'warning'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Fast booking! Only up to to 24 hour notice needed
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;