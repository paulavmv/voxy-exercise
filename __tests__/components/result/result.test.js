import { Result } from "src/components/result/index";
import { render, screen } from "@testing-library/react";

describe("Word counter test", () => {
	test('Display the correct word count', function () {

        render(<Result input="aa aa" />);
        const result =  screen.getByTestId("result").innerHTML;
        expect(result).toEqual("2");

	});
	
	test('Return the correct word count if there are multiple spaces', function () {
        render(<Result input="aa    aa" />);
        const result =  screen.getByTestId("result").innerHTML;
        expect(result).toEqual("2");
	});
	
    test('Return 0 words if there is only punctuation', function () {
        render(<Result input="..." />);
        const result =  screen.getByTestId("result").innerHTML;
        expect(result).toEqual("0");
	});
	
	test('Return no words if string has only spaces', function () {
        render(<Result input="       " />);
        const result =  screen.getByTestId("result").innerHTML;
        expect(result).toEqual("0");
	});
  });
