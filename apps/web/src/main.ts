import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import type { HelloResponse, WorkoutEntry } from '@craftmyslef/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="grid min-h-screen place-content-center bg-gradient-to-b from-zinc-900 to-zinc-950 px-6 text-center">
      <h1 class="m-0 text-4xl font-semibold tracking-[0.08em] text-zinc-50">craftmyslef</h1>
      <p class="mt-2 text-sm text-zinc-400">Minimal workout tracker skeleton</p>

      <section class="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 text-left shadow-xl shadow-black/20">
        <p class="m-0 text-sm text-zinc-300"><span class="font-semibold text-zinc-100">API status:</span> {{ status() }}</p>
        <p class="mt-2 text-sm text-zinc-300"><span class="font-semibold text-zinc-100">Message:</span> {{ message() }}</p>
        <p class="mt-2 mb-0 text-sm text-zinc-300">
          <span class="font-semibold text-zinc-100">Shared model sample:</span>
          {{ workoutDraft().name }} ({{ workoutDraft().workoutType }})
        </p>
      </section>
    </main>
  `
})
class AppComponent implements OnInit {
  readonly status = signal('checking...');
  readonly message = signal('loading...');
  readonly workoutDraft = signal<WorkoutEntry>({
    id: 'draft-1',
    userId: 'user-1',
    name: 'Push Day',
    workoutType: 'strength',
    durationMinutes: 45,
    performedAtIso: new Date().toISOString()
  });

  async ngOnInit(): Promise<void> {
    try {
      const response = await fetch(
        (window as Window & { __API_URL__?: string }).__API_URL__ ?? 'http://localhost:3000/api/hello'
      );

      if (!response.ok) {
        throw new Error('api unavailable');
      }

      const data = (await response.json()) as HelloResponse;
      this.status.set('connected');
      this.message.set(data.message);
    } catch {
      this.status.set('disconnected');
      this.message.set('Could not reach backend');
    }
  }
}

void bootstrapApplication(AppComponent);
