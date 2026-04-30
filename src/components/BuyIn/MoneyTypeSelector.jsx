function MoneyTypeSelector({ moneyType, setMoneyType }) {
  return (
    <div className="buyin__radio-group">
      <label className="buyin__radio">
        <input
          type="radio"
          name="moneyType"
          checked={moneyType === "real"}
          onChange={() => setMoneyType("real")}
        />
        <span />
        Use real money
      </label>

      <label className="buyin__radio">
        <input
          type="radio"
          name="moneyType"
          checked={moneyType === "cash"}
          onChange={() => setMoneyType("cash")}
        />
        <span />
        Use cash money
      </label>
    </div>
  );
}

export default MoneyTypeSelector;
