export const parseCSV = (csv: string) => {
  const lines = csv.trim().split('\n');
  const result: any[] = [];

  for (let i = 1; i < lines.length; i++) {
    const [title, author, publishedYear] = lines[i].split(',').map(s => s.trim());
    const year = Number(publishedYear);
    result.push({ title, author, publishedYear: year });
  }

  return result;
};
