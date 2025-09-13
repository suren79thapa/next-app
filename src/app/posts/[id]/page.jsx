export default async function Page({ params, searchParams }) {
  const { id } = await params;
  const m = await searchParams;
  console.log(m);
  return (
    <div>
      <h1>This is detail</h1>
    </div>
  );
}
