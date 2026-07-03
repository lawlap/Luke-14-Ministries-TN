import FamilyWizard from './FamilyWizard';

export const metadata = { title: 'Family Registration — Camp Celebrate' };

export default function FamilyRegisterPage() {
  return (
    <section className="bg-neutral-50 py-12">
      <div className="container-site max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Camp Celebrate 2026 — Family Registration
        </h1>
        <p className="text-center text-neutral-600 mt-3 mb-8">
          Campers: Week 1 July 20–24 · Week 2 July 27–31 · $495 per family
        </p>
        <FamilyWizard />
      </div>
    </section>
  );
}
