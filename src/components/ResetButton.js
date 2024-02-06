function ResetButton({ dispatch }) {
  return (
    <button className="btn" onClick={() => dispatch({ type: "reset" })}>
      Reset
    </button>
  );
}

export default ResetButton;
