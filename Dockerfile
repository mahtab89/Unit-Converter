# ===== Build Stage =====
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# ===== Run Stage =====
FROM eclipse-temurin:21-jdk
WORKDIR /app
COPY --from=build /app/target/unitconverterwebapp-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
