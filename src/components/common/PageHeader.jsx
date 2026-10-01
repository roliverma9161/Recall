function PageHeader({ title, description, action }) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-zinc-500">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

export default PageHeader;
