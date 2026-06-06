@echo off
echo Starting Team Spirit website server...
echo.
powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0simple-server.ps1"
