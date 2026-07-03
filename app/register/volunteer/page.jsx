import VolunteerForm from './VolunteerForm';

export const metadata = { title: 'Volunteer Registration — Camp Celebrate' };

export default function VolunteerRegisterPage() {
  return (
    <section className="bg-neutral-50 py-12">
      <div className="container-site max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Camp Celebrate 2026 — Volunteer Application
        </h1>
        <p className="text-center text-neutral-600 mt-3 mb-8">
          Volunteers: Week 1 July 19–24 · Week 2 July 26–31 · $495 per week
        </p>
        <VolunteerForm />
      </div>
    </section>
  );
}
