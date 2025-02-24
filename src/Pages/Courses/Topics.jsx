import React, { useState, useEffect } from 'react';
import AskAi from '../../utility/AskAi.js';
import { useParams } from 'react-router-dom';
import { Send, Bot, Loader2, BookOpen, ArrowRight } from 'lucide-react';

export default function Topics() {
  let { subjectName, chapterName } = useParams();
  let [AIData, setAIData] = useState(null);
  let [Loading, setLoading] = useState(true);
  let [Question, setQuestion] = useState(`Explain ${subjectName}, ${chapterName} In an easy Way`);

  useEffect(() => {
    setLoading(true);
    async function GetAIData() {
      let Res = await AskAi(Question);
      console.log(Res);
      setAIData(Res);
      setLoading(false);
    }
    GetAIData();
  }, [Question]);

  function handleSubmit(e) {
    e.preventDefault();
    let Q = e.target[0].value;
    setQuestion(Q);
    e.target[0].value = '';
  }

  // Function to format paragraphs with better spacing
  const formatResponse = (text) => {
    if (!text) return [];
    return text.split('\n').filter(para => para.trim() !== '');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-slate-800">
            {subjectName} - {chapterName}
          </h1>
        </div>
        <p className="text-slate-600">
          Explore topics and get AI-powered explanations for this chapter.
        </p>
      </div>

      {/* AI Response Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Bot className="text-blue-600 w-6 h-6" />
              <h3 className="text-xl font-semibold text-slate-800">AI Response</h3>
            </div>
          </div>
          
          <div className="p-6">
            {Loading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                <span className="ml-3 text-slate-600">Generating response...</span>
              </div>
            ) : (
              <div className="prose prose-slate max-w-none">
                {formatResponse(AIData).map((paragraph, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                    {index < formatResponse(AIData).length - 1 && (
                      <div className="my-4 border-b border-slate-100" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ask Doubts Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-b border-slate-100">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-blue-600" />
              Ask Your Doubts
            </h3>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="doubtInput"
                  placeholder="Type your question here..."
                  className="w-full pl-4 pr-12 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}