import { checker } from "../src/client/js/checker";


test('truo or fauls', () => {
    const a ="https://www.meaningcloud.com/developer/account/subscriptions"
    expect(checker(a)).toBeDefined();
  });

