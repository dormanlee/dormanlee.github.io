export default function SidebarWidget() {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Thank you for your attention!
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        If you need any help or have any questions, please feel free to reach
        out to us.
      </p>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Whatsapp Support
      </a>
    </div>
  )
}
