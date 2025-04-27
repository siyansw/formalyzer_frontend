export default function BuilderPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Build Your Survey
        </h1>

        <form className="flex flex-col gap-4">
          <textarea
            placeholder="Describe what you want to research..."
            className="border rounded-lg p-4 min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Generate Survey
          </button>
        </form>
      </div>
    </div>
  );
}
