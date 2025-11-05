# Team Meeting Minutes — Oct 29 2025

**Project:** School Portal (CSCI-4421)  
**Sprint:** 3 (Oct 29 → Nov 12)  
**Attendees:** Eric McClinton (Scrum Master), Francesca Onumah, Jalesa Drakes  
**Absent:** —  
**Repo:** https://<your-repo-url>

---

## 1️⃣ Agenda
- Review Sprint 2 deliverables and lessons learned  
- Define Sprint 3 goal and scope  
- Confirm Expo mobile setup and feature priorities  
- Assign PBIs and due dates  
- Note any immediate blockers

---

## 2️⃣ Key Decisions
- **Mobile App:** Use Expo SDK 51 (blank template) for mock login + courses flow.  
- **Web Portal:** Keep a simple static landing page this sprint.  
- **Branching:** `main` (protected) → `develop` → `feat/<pbi-id>-<slug>`.  
- **CI Workflow:** Run `npm ci && npm run lint` on PRs to develop.  
- **Design Tokens:** Unified colors/spacing across web and mobile.

---

## 3️⃣ Risks / Blockers
- Expo setup issues across laptops → Use Expo Go on phones as fallback.  
- Time constraint before next checkpoint → Focus on login and course screens only.

---

## 4️⃣ Sprint 3 Goal
> Deliver a working prototype that lets a student **log in (mock)**, **view courses**, and **open course details** with placeholder announcements.

---

## 5️⃣ Action Items
| Owner | Task | Due |
|:--|:--|:--|
| Eric | Initialize Expo app and tab navigation | Oct 31 |
| Francesca | Write unit tests for PBIs 101–103 | Nov 2 |
| Jalesa | Draft UI copy and style tokens | Nov 2 |
| All | Merge PRs to develop with passing checks | rolling |

---

## 6️⃣ Next Meeting
**Nov 2 2025 @ 6 PM – Mid-Sprint Sync**
