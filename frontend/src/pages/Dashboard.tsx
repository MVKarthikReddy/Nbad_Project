import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">UNCC Latest News</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
        <p className="text-gray-700 mb-4">
          
Information for Current Student-Athletes<br/>

The success of Charlotte student-athletes, both in the classroom and on the playing field, is a top priority of the athletic department. This page is a resource for Charlotte student-athletes to be informed of the rules and regulations that they must abide by in order to stay academically and athletically eligible throughout their college career.  The Charlotte Compliance Department is here to assist all student-athletes; we encourage you to ask before you act.
<br/>
How do I maintain academic eligibility?<br/>
Enrolled full-time (12 credit hours). Note: less than 12 credit hours is permitted in the final semester.
Pass at least 6 hours each semester.
Complete 18 credit hours per academic year (Fall and Spring semesters).
Declare a major by the 5th semester or junior year.
5 years (from initial enrollment) to play 4 seasons.
<br/>
When am I required to practice?<br/>
In Season:
20 hours per week
4 hours a day
one day off per week
No practice between midnight and 5:00 am or after a competition

Out-of-Season:
8 hours per week, 4 of which can be skill instruction 
two days off per week
No required practice one week prior to final exam through the end of exams

Summer:
No required countable athletically related activities during the summer.   
<br/>
May I accept any extra benefits?<br/>
You are allowed to accept the following benefits:
Benefits generally available to all students
Occasional meals (approved by Charlotte Athletics Department)
Athletic apparel issued by Charlotte Athletics Department
Complimentary Admissions. Note: you may not sell or exchange your complimentary admissions for money or any item of value to anyone, including teammates or other student-athletes.
<br/>
You are not allowed to accept the following benefits:
Discounts and credits
Free or reduced cost services
Telephones and credit cards
Entertainment services
Loans of money or assistance in payment of bills
Car or use of a car and other forms of transportation (i.e. airline tickets)
Other gifts (such as clothing, shoes, merchandise, meals)
Members of the athletic department staff (including tutors) may not type reports, papers, letters, etc.
<br/>
May I be employed?<br/>
You are allowed to be employed and receive pay at the going rate, for work actually performed.
What promotional activities can I participate in?  
You may participate in charitable or educational activities approved by athletics.
You may not allow your name, picture or likeness to be used to advertise or promote any commercial products, services, jobs or employers.
<br/>
May I help with recruiting?<br/>
You may receive telephone calls from prospects and you may write or email the prospects at your own free will.  However you may not communicate with the prospect at the direction of the coach or expense of the institution.
<br/>
What type of financial aid is acceptable?<br/>
Student athletes may receive aid from Charlotte, Governmental agencies, Parents, legal guardians; and Community scholarships etc. Athletic Scholarships are one-year awards, renewable on an annual basis.
Any financial aid that you receive from a source other than Charlotte must be reported to the University and the Athletics Department.
<br/>
Am I allowed to Gamble?<br/>
You may NOT solicit a bet on ANY intercollegiate team or on ANY professional team. Examples include parlay cards, NCAA pool, fantasy leagues with entry fee.
You may NOT accept any wager (i.e., cash, shirt, dinner) on any team representing Charlotte.
You may NOT knowingly provide information (i.e. injury reports) to individuals involved in organized gambling activities concerning intercollegiate athletics competition.
Consequences of gambling include loss of one year and one season of eligibility and in some cases permanent ineligibility.

        </p>
        <p className="text-sm text-gray-500">
          Source: <a href="https://charlotte49ers.com/index.aspx" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            UNCC Official Athletics Portal
          </a>
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Technical Stack Overview</h2>
        <p className="text-gray-700">
          This application is built using the MERN stack (MongoDB, Express.js, React, Node.js). The frontend 
          is developed with React and TypeScript, utilizing modern hooks and context for state management. 
          Authentication is handled via JWT tokens, with protected routes ensuring secure access. The UI is 
          styled using Tailwind CSS for a responsive design. Charts are implemented using Recharts library, 
          displaying data fetched from MongoDB through REST API endpoints. The backend runs on Node.js with 
          Express, featuring middleware for authentication and CORS handling. The entire application follows 
          WCAG accessibility guidelines and implements best practices for web development.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;