function CalcIntent(intent, session, response) {
  // Note: no validation at all, very simple demo code
  let left = intent.slots.left.value;
  let right = intent.slots.right.value;

  let result = parseInt(left) + parseInt(right);

  response.tell(result);
};