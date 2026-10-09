const Navlink = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    return (
      <nav className="border-t p-4">
        <p className="text-red-500">
          ক্যাটাগরি লোড করা যাচ্ছে না!
        </p>
      </nav>
    );
  }

  const result = await res.json();

  const categories = Array.isArray(result)
    ? result
    : Array.isArray(result.data)
      ? result.data
      : [];

  return (
    <nav className="border-t border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center gap-6 px-4 py-3">
        {categories.map(
          (item: {
            id: string;
            slug: string;
            nameBn: string;
            icon: string;
          }) => (
            <div
              key={item.id}
              className="cursor-pointer text-sm font-medium text-gray-700 transition hover:text-green-600"
            >
              <span>{item.icon}</span>{" "}
              <span>{item.nameBn}</span>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Navlink;