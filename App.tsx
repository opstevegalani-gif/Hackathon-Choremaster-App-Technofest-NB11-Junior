
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ChoreManager from './components/ChoreManager';
import AISync from './components/AISync';
import { AppView, Chore, Expense, Meal, FamilyMember } from './types';
import { INITIAL_CHORES, INITIAL_EXPENSES, INITIAL_MEALS, INITIAL_FAMILY } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('dashboard');
  const [chores, setChores] = useState<Chore[]>(INITIAL_CHORES);
  const [expenses] = useState<Expense[]>(INITIAL_EXPENSES);
  const [meals] = useState<Meal[]>(INITIAL_MEALS);
  const [family] = useState<FamilyMember[]>(INITIAL_FAMILY);

  const handleUpdateChore = (updatedChore: Chore) => {
    setChores(prev => prev.map(c => c.id === updatedChore.id ? updatedChore : c));
  };

  const handleAddChores = (newChores: Chore[]) => {
    setChores(prev => [...newChores, ...prev]);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard chores={chores} expenses={expenses} />;
      case 'chores':
        return (
          <ChoreManager 
            chores={chores} 
            family={family} 
            onUpdateChore={handleUpdateChore} 
            onAddChores={handleAddChores} 
          />
        );
      case 'budget':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">Family Budget</h2>
                  <p className="text-slate-500 text-sm">Tracking every penny for household stability.</p>
                </div>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-emerald-100">+ Add Expense</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Date</th>
                      <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Category</th>
                      <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest">Note</th>
                      <th className="pb-4 font-bold text-slate-400 text-[10px] uppercase tracking-widest text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expenses.map(e => (
                      <tr key={e.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                        <td className="py-5 text-sm font-medium text-slate-500">{e.date}</td>
                        <td className="py-5">
                          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight">
                            {e.category}
                          </span>
                        </td>
                        <td className="py-5 text-sm text-slate-600 font-medium">{e.note}</td>
                        <td className="py-5 text-sm font-black text-slate-900 text-right">${e.amount.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'meals':
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Weekly Meal Plan</h2>
                <p className="text-slate-500 text-sm">Deliciously organized family dinners.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition">✨ AI Recipe Suggestions</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
              {meals.map(m => (
                <div key={m.day} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-indigo-600 font-black text-lg mb-6 flex items-center justify-between">
                    {m.day}
                    <span className="w-2 h-2 rounded-full bg-slate-100"></span>
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Breakfast</p>
                      <p className="text-sm font-semibold text-slate-800">{m.breakfast}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Lunch</p>
                      <p className="text-sm font-semibold text-slate-800">{m.lunch}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dinner</p>
                      <p className="text-sm font-bold text-indigo-900">{m.dinner}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'ai-assistant':
        return <AISync />;
      default:
        return <Dashboard chores={chores} expenses={expenses} />;
    }
  };

  return (
    <Layout activeView={activeView} setView={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default App;
