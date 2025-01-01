import Arena from "./components/arena"
export default function App() {
  const check2 = (array,num,diff1,diff2) => {
    const value = num

    const checkSubsequence = (startIndex, target1, target2) => {
        let found1 = false, found2 = false;
        for (let j = startIndex; j < array.length; j++) {
            if (array[j] === target1) {
                found1 = true;
            }
            if (array[j] === target2) {
                found2 = true;
            }
        }
        return found1 && found2;
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value && checkSubsequence(i + 1, value + 2*diff1, value + 2 *2* diff1)) {
            return true;
        } else if (array[i] === value + diff2 && checkSubsequence(i + 1, value + diff2 + diff1 , value + diff2 + 2 * diff1)) {
            return true;
        }
    }

    return false;
};
  const check1 = (array,num,diff1,diff2) => {
    const value = num

    const checkSubsequence = (startIndex, target1, target2) => {
        let found1 = false, found2 = false;
        for (let j = startIndex; j < array.length; j++) {
            if (array[j] === target1) {
                found1 = true;
            }
            if (array[j] === target2) {
                found2 = true;
            }
        }
        return found1 && found2;
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value && checkSubsequence(i + 1, value + diff1, value + 2 * diff1)) {
            return true;
        } else if (array[i] === value + diff2 && checkSubsequence(i + 1, value + diff2 + diff1 , value + diff2 + 2 * diff1)) {
            return true;
        } else if (array[i] === value + 2*diff2 && checkSubsequence(i + 1, value + 2*diff2 + diff1, value + 2*diff2 + 2 * diff1)) {
            return true;
        }
    }

    return false;
};

  return (
    <div className="flex items-center justify-center h-screen">
      <Arena />
    </div>
  )
}