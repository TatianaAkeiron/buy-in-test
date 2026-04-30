const MIN_AMOUNT = 0.5;
const MAX_AMOUNT = 50;

function AmountControl({ amount, setAmount }) {
  const handleAmountChange = (value) => {
    const number = Number(value);

    if (Number.isNaN(number)) {
      setAmount(MIN_AMOUNT);
      return;
    }
    if (number < MIN_AMOUNT) {
      setAmount(MIN_AMOUNT);
      return;
    }

    if (number > MAX_AMOUNT) {
      setAmount(MAX_AMOUNT);
      return;
    }

    setAmount(number);
  };

  return (
    <>
      <div className="buyin__amount">
        <button
          className="buyin__green-button"
          type="button"
          onClick={() => setAmount(MIN_AMOUNT)}
        >
          Min $0.5
        </button>

        <label className="buyin__field buyin__field--amount">
          {" "}
          <span>Amount</span>
          <input
            type="number"
            min={MIN_AMOUNT}
            max={MAX_AMOUNT}
            step="0.5"
            value={amount}
            onChange={(e) => handleAmountChange(e.target.value)}
          />
        </label>

        <button
          className="buyin__green-button"
          type="button"
          onClick={() => setAmount(MAX_AMOUNT)}
        >
          Max $50
        </button>
      </div>
      <input
        className="buyin__slider"
        type="range"
        min={MIN_AMOUNT}
        max={MAX_AMOUNT}
        step="0.5"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={{
          "--progress": `${
            ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100
          }%`,
        }}
      />{" "}
    </>
  );
}

export default AmountControl;
