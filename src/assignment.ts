function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined || toUpper) {
    const upperCaseStr = input.toUpperCase();
    console.log(upperCaseStr);
    return upperCaseStr;
} else {
    const lowerCaseStr = input.toLowerCase();
    console.log(lowerCaseStr);
    return lowerCaseStr;
  }
}

// formatString("hello",);


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}