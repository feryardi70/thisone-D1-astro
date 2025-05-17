import SpinnerCss from "./SpinnerCss";

export default function MTFLoading() {
  return (
    <>
      <div className="mx-auto w-full max-w-lg border border-fuchsia-100 p-4 mt-3">
        <div className="flex justify-end mb-6">
          <div className="flex animate-pulse space-x-4 w-[35%]">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-gray-200"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                  <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                </div>
                <div className="h-2 rounded bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
        <SpinnerCss />
      </div>
    </>
  );
}
