interface Action {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (currState: number, action: Action): number => {
  if (action.type === "INCREMENT") return currState + 1;
  if (action.type === "RESET") return 0;
  return currState;
};

export default counterReducer;
