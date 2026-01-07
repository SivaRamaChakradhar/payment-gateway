export default function Success() {
  return (
    <div className="page" data-test-id="success-state">
      <h2>Payment Successful!</h2>
      <span data-test-id="success-message">
        Your payment has been processed successfully
      </span>
    </div>
  );
}
