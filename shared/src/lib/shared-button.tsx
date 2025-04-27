// libs/shared/shared-ui/src/lib/PrimaryButton.tsx
export function PrimaryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button className="px-4 py-2 rounded bg-blue-600 text-white" {...props} />
  );
}
