import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          The purpose of training is to tighten up the slack, toughen the body, and polish the spirit.!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Workout till you feel that pain and soreness in muscles. 
          This one is good pain.
           No pain, no gain.
        </p>
        <div className="bootcamps">
          <div>
            <h4>BEGINNER - What hurts today makes you stronger tomorrow.</h4>
            <p><b>Ideal for people new to fitness or returning after a long break.</b>
              The last three or four reps is what makes the
               muscle grow. This area of 
              pain divides a champion from someone 
              who is not a champion.Enduring means accepting. Accepting things as they are and not
               as you would wish them to be, and then looking ahead, not behind.
            </p>
          </div>
          <div>
            <h4>ALPHA - A champion is someone who gets up when they can’t.</h4>
            <p><b>Ideal for people who have some experience with fitness and want to lose those extra pounds.</b>
              The harder you work and the more prepared you are for something,
               you’re going to be able to persevere through anything.Workout till you feel that pain and soreness in muscles. 
          This one is good pain.
           No pain, no gain.
            </p>
          </div>
          <div>
            <h4>SIGMA - Continuous improvement is better than delayed perfection.</h4>
            <p><b>Ideal for people who are in the underweight category and want to gain muscle.</b>
              Enduring means accepting. Accepting things as they are and not
               as you would wish them to be, and then looking ahead, not behind.
               The harder you work and the more prepared you are for something,
               you’re going to be able to persevere through anything.
            </p>
          </div>
          <div>
            <h4>ULTRA - Once you learn to quit, it becomes a habit.</h4>
            <p><b>Ideal for people who are already fit and want to push their limits.</b>
              Think of your workouts as important
               meetings you schedule with yourself. Bosses don’t cancel!
               The harder you work and the more prepared you are for something,
               you’re going to be able to persevere through anything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;