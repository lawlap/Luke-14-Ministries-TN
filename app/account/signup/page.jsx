import SignupForm from './SignupForm';

export const metadata = { title: 'Create Account' };

export default function SignupPage() {
  return (
    <section className="bg-brand-light min-h-[60vh] py-14">
      <div className="container-site max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">
          Create Your Account
        </h1>
        <p className="text-center text-neutral-600 mb-8">
          One account for camp registration and giving — for both families and
          volunteers.
        </p>
        <SignupForm />
      </div>
    </section>
  );
}
